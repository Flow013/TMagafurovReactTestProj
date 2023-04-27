/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/***********************************
 * Взято из https://ant.design/components/table#components-table-demo-virtual-list
 * TODO: С antd5 этот пример будто бы не работает. Реализовать виртуализацию через другие методы
 ************************************/

import type { TableProps } from 'antd'
import { Spin, Table, theme } from 'antd'
import classNames from 'classnames'
import ResizeObserver from 'rc-resize-observer'
import React, { useEffect, useRef, useState } from 'react'
import { VariableSizeGrid as Grid } from 'react-window'
import './style.css'
import {
  IUseInfiniteScrollOptions,
  useInfiniteScroll
} from '../../../hooks/useInfiniteScroll'

export interface VirtualTableProps<RecordType extends object>
  extends TableProps<RecordType> {
  infiniteScroll?: IUseInfiniteScrollOptions
}

export const VirtualTable = <RecordType extends object>(
  props: VirtualTableProps<RecordType>
) => {
  const infiniteScrollRef = useRef(null)
  const { loading } = useInfiniteScroll(infiniteScrollRef, props.infiniteScroll)
  const { columns, scroll } = props
  const [tableWidth, setTableWidth] = useState(0)
  const { token } = theme.useToken()

  const widthColumnCount = columns!.filter(({ width }) => !width).length
  const mergedColumns = columns!.map((column) => {
    if (column.width) {
      return column
    }

    return {
      ...column,
      width: Math.floor(tableWidth / widthColumnCount)
    }
  })

  const gridRef = useRef<any>()
  const [connectObject] = useState<object>(() => {
    const obj = {}
    Object.defineProperty(obj, 'scrollLeft', {
      get: () => {
        if (gridRef.current) {
          return gridRef.current?.state?.scrollLeft
        }
        return null
      },
      set: (scrollLeft: number) => {
        if (gridRef.current) {
          gridRef.current.scrollTo({ scrollLeft })
        }
      }
    })

    return obj
  })

  const resetVirtualGrid = () => {
    gridRef.current?.resetAfterIndices({
      columnIndex: 0,
      shouldForceUpdate: true
    })
  }

  useEffect(() => resetVirtualGrid, [tableWidth])

  const renderVirtualList = (
    rawData: object[],
    { scrollbarSize, ref, onScroll }: any
  ) => {
    ref.current = connectObject
    const totalHeight = rawData.length * 54

    console.log(scrollbarSize, totalHeight)
    return (
      <>
        <Grid
          ref={gridRef}
          className="virtual-grid"
          columnCount={mergedColumns.length}
          columnWidth={(index: number) => {
            const { width } = mergedColumns[index]
            return totalHeight > (scroll?.y as number) &&
              index === mergedColumns.length - 1
              ? (width as number) - scrollbarSize - 1
              : (width as number)
          }}
          height={scroll?.y as number}
          rowCount={rawData.length /* infinite */}
          rowHeight={() => 54}
          width={tableWidth}
          onScroll={({ scrollLeft, verticalScrollDirection }) => {
            onScroll({ scrollLeft })
            console.log(scrollLeft, verticalScrollDirection, scroll?.y)
          }}
        >
          {({
            columnIndex,
            rowIndex,
            style
          }: {
            columnIndex: number
            rowIndex: number
            style: React.CSSProperties
          }) => (
            <div
              className={classNames('virtual-table-cell', {
                'virtual-table-cell-last':
                  columnIndex === mergedColumns.length - 1
              })}
              style={{
                ...style,
                boxSizing: 'border-box',
                padding: token.padding,
                borderBottom: `${token.lineWidth}px ${token.lineType} ${token.colorSplit}`,
                background: token.colorBgContainer
              }}
            >
              {
                (rawData[rowIndex] as any)[
                  (mergedColumns as any)[columnIndex].dataIndex
                ]
              }
            </div>
          )}
        </Grid>
      </>
    )
  }

  return (
    <>
      <ResizeObserver
        onResize={({ width }) => {
          setTableWidth(width)
        }}
      >
        <>
          <Table
            {...props}
            loading={loading}
            className="virtual-table"
            columns={mergedColumns}
            pagination={false}
            components={{
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              body: renderVirtualList as any
            }}
          />
        </>
      </ResizeObserver>
      <div ref={infiniteScrollRef} />
      <Spin spinning={loading} style={{ width: '100%' }} />
    </>
  )
}
