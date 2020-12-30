function Father(props) {
  return <div style={{ height: '50px', background: 'blue', color: '#fff', textAlign: 'center', lineHeight: '50px',overflow: 'hidden' }}>
    <div style={{float:'left'}}>
      {props.left}
    </div>
      {props.children}
    <div style={{float:'right'}}>
      {props.right}
    </div>
  </div>
}


export default Father