import { useEffect } from 'react'
import { List } from 'antd'

export default function TodoList({ loading, itemList, setItemList, setLoading }) {

  useEffect(() => {
    fetch('https://much-todo-api-lc.web.app/items')
      .then(resp => resp.json())
      .then(setItemList)
      .catch(alert) // we can do better...
      .finally(() => setLoading(false))
  }, [])

  return (

    <section>
      <List
        bordered
        dataSource={itemList}
        loading={loading}
        size='large'
        renderItem={ (task) => (
          <List.Item className={(task.done) && 'done'}>
            {task.item}
          </List.Item>
        )}
      />
    </section>
    
  )
}