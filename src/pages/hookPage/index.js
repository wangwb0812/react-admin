import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd'
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
    </div>
  )
}

export default HookPage