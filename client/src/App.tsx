import './App.css'

function App() {
  
  return (
    <>
      <div className="header">
        <div className="input_group">
          <input type="text" placeholder="Tìm kiếm bài viết..." />
          <select>
            <option>Lọc bài viết</option>
            <option>Mới nhất</option>
            <option>Cũ nhất</option>
          </select>
        </div>
        <button className="btn btn-primary">Thêm bài viết</button>
      </div>
      <div className="table-card">
        <table className="vp-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Hình ảnh</th>
              <th>Ngày viết</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>State trong ReactJS</td>
              <td>
                <img className="thumb" src="thumb1.jpg" alt="" />
              </td>
              <td>04/03/2024</td>
              <td>
                <span className="badge badge-success">Đã xuất bản</span>
              </td>
              <td className="actions">
                <button className="btn btn-warning">Chặn</button>
                <button className="btn btn-primary">Sửa</button>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tổng quan về ReactJS</td>
              <td>
                <img className="thumb" src="thumb2.jpg" alt="" />
              </td>
              <td>03/03/2024</td>
              <td>
                <span className="badge badge-success">Đã xuất bản</span>
              </td>
              <td className="actions">
                <button className="btn btn-warning">Chặn</button>
                <button className="btn btn-primary">Sửa</button>
                <button className="btn btn-danger">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App
