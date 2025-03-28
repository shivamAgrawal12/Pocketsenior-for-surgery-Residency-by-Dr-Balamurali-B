import { useParams } from "react-router-dom";
import testimonialsData from "./testimonials";
import wrong from "../assets/heartbeat.gif";
import "./Style.css";

const Chapter = () => {
  const { id } = useParams();

  const chapter = testimonialsData.find((item) => String(item.chapterId) === String(id));

  if (!chapter) {
    return (
      <div id="no-rec">
        <div id="no-record">
          <img src={wrong} alt="Not Found" id="no-record-img" />
          <h2 id="no-record-para">No Chapter Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div id="chapter-detail">
      <div className="chapter-info">
        <h1 className="chapter-name">{chapter.name}</h1>

        {chapter.image && (
          <img src={chapter.image} alt={chapter.name} className="chapter-image" />
        )}

        {chapter.text && <p className="chapter-text">{chapter.text}</p>}

        {chapter.indication && chapter.indication.length > 0 && (
          <div className="chapter-indication">
            <ul>
              {chapter.indication.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {chapter.instrument && chapter.instrument.length > 0 && (
          <div className="chapter-instrument">
            <ul>
              {chapter.instrument.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {chapter.procedure && chapter.procedure.length > 0 && (
          <div className="chapter-procedure">
            <ul>
              {chapter.procedure.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {chapter.precaution && chapter.precaution.length > 0 && (
          <div className="chapter-precaution">
            <ul>
              {chapter.precaution.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {chapter.position && <p className="chapter-position">{chapter.position}</p>}
      </div>
    </div>
  );
};

export default Chapter;
