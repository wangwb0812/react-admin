import React, { useState, useEffect } from 'react'
import { Button, Input, Pagination } from 'antd'
import axios from 'axios'

function HookPage(props) {

  const [count, setCount] = useState(0);
  const [value, setValue] = useState(props.defaultVal || 'react');


  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count])

  const [dataList, setDataList] = useState({
    hits: []
  })

  useEffect(() => {
    let timer = null
    timer = setTimeout(() => {
      fetchData()
    }, 500)
    async function fetchData() {
      const res = await axios('https://hn.algolia.com/api/v1/search?query=' + value)
      setDataList(res.data)
    }
    return () => {
      clearTimeout(timer)
    }
  }, [value])

  const [total, setTotal] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://hn.algolia.com/api/v1/search', {
        params: {
          query: value
        }
      })
      if (res) {
        console.log(res)
        setTableData(res.data.hits)
        setTotal(res.data.hits.length * 2)
      }

    }
    fetchData()
  }, [value])

  function pageChange(page, size) {
    console.log(page, size)
    setPageNum(page)
    setPageSize(size)
  }
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Input allowClear placeholder="请输入" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <ul>
        {
          dataList.hits.map(item => {
            return <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          })
        }
      </ul>
      <hr />
      <div>{count}</div>
      <Button type="primary" onClick={() => setCount(count + 1)}>+</Button>
      <Button type="danger" onClick={() => setCount(count - 1)}>-</Button>
      <div>
        <ul>
          {
            tableData.map(item => {
              return (<li key={item.objectID}>{item.title}</li>)
            })
          }
        </ul>
        <Pagination
          total={total}
          defaultCurrent={pageNum}
          defaultPageSize={pageSize}
          showSizeChanger
          showQuickJumper
          onChange={pageChange}
          showTotal={total => `${total}`}
        />
      </div>


    </div>
  )
}

export default HookPage