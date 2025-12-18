import { newsData } from "../data/news";
import "./NewsSection.css";

const NewsSection = () => {
  return (
    <section className="news-section">
      <h2 className="news-heading">News & Updates</h2>

      <div className="news-grid">
        {newsData.map((item) => (
          <div key={item.id} className="news-card">
            {/* Image */}
            <div className="news-image">
              <img src={item.image} alt={item.title} />

              {/* Date Badge */}
              <div className="news-date">
                <span className="month">{item.month}</span>
                <span className="day">{item.day}</span>
              </div>
            </div>

            {/* Content */}
            <div className="news-content">
              <div className="news-tag">
                <span>📰</span> News
              </div>

              <h3 className="news-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
