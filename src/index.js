import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1>Hồ Hoàng Phi!</h1>
            <h2>hello</h2>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

