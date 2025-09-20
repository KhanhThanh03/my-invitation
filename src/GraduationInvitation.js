import { useState } from 'react';
import './GraduationInvitation.css';

const GraduationInvitation = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setShowAnimation(true);
      setTimeout(() => {
        setSubmitted(true);
        setShowAnimation(false);
      }, 1500);
    }
  };

  if (submitted) {
    return (
      <div className="page-container-light">
        <div className="card-light">
          {/* Decorative elements */}
          <div className="decorative-circle top-left blue-light"></div>
          <div className="decorative-circle bottom-right yellow-light"></div>

          <div className="content">
            <h1 className="title-large serif">LỜI MỜI THAM DỰ</h1>
            <h2 className="title-medium">Lễ tốt nghiệp của Đỗ Khánh Thành</h2>

            <div className="invitation-text">
              <p>Trân trọng kính mời</p>
              <p className="name">{name}</p>
              <p>Đến tham dự buổi lễ tốt nghiệp</p>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <img 
                  src="me.jpg" 
                  alt="Calendar showing graduation date: June 15, 2024" 
                  className="image-medium rounded"
                />
                <p className="info-title">Thời gian</p>
                <p>11:00-12:00, Ngày 27/11/2025</p>
              </div>
              <div className="info-item">
                <img 
                  src="me_iuh.jpg" 
                  alt="Grand university auditorium with stage for graduation ceremony" 
                  className="image-medium rounded"
                />
                <p className="info-title">Địa điểm</p>
                <p>Trường Đại học Công nghiệp TP.HCM</p>
                <p className="info-subtext">12 Nguyễn Văn Bảo, Đ.Hạnh Thông, Gò Vấp, TP.HCM</p>
              </div>
            </div>

            <div className="note-box">
              <p className="note-title">📝 Ghi chú:</p>
              <p className="note-text">
                {/* <h3>
                    Xin vui lòng makeup, lên đồ đơn giản. <span className="inline-text">"Sợ đẹp hơn tui thoi"</span>
                </h3>     */}
                <h3>
                    Sự hiện diện của <span className="highlight-name">{name}</span> là vinh dự của tui🫶.
                </h3>
              </p>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="btn-primary"
            >
              Quay lại trang chủ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container-dark">
      <div className="card-dark">
        {showAnimation && (
          <div className="overlay">
            <div className="bounce-animation">
              <img 
                src="/run.png" 
                alt="Animated graduation cap with sparkling effects" 
                className="image-small"
              />
              <p className="loading-text">Đang tạo lời mời...</p>
            </div>
          </div>
        )}

        <div className="header-section">
          <img 
            src="/logo_iuh.png" 
            alt="University emblem with laurel wreath for 2025 graduation" 
            className="image-small mb-1"
          />
          <h1 className="title-medium-dark">LỄ TỐT NGHIỆP 2025</h1>
          <p className="subtitle-dark">Chào mừng bạn đến với buổi lễ đặc biệt</p>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name" className="label">Họ và tên của bạn</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập không thiếu một chữ lun nha😉"
              className="input"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="btn-submit"
          >
            <div className="btn-content">
              <span>Nhận Lời Mời</span>
              <img 
                src="/accept.png" 
                alt="Small graduation cap icon" 
                className="icon-small"
                style={{ height: '30px', width: '30px' }}
              />
            </div>
          </button>
        </form>

        <div className="footer-icons">
          <img 
            src="/minion1.png" 
            alt="Diploma scroll with red ribbon symbolizing graduation certificate" 
            className="icon-opacity"
          />
          <img 
            src="/minion2.png" 
            alt="Academic medal on blue ribbon for honors achievement" 
            className="icon-opacity"
          />
          <img 
            src="/minion3.png" 
            alt="Open book with graduation cap symbolizing knowledge and learning" 
            className="icon-opacity"
          />
        </div>
      </div>
    </div>
  );
};

export default GraduationInvitation;
