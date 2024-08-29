import { ring } from "../utils/constatnt"

export const WeddingSection = () => {
    return (
        <div className="wedding-section">
            <div className="wedding-section-image">
                 <img src={ring} alt="ring"/>
            </div>
            <h3 className="wedding-section-title">Պսակադրություն</h3>
            <h3 className="wedding-section-time">13։20</h3>
            <h3 className="wedding-section-church">Սաղմոսավանք</h3>
            <span className="wedding-section-village">գ․ Սաղմոսավան</span>
            <a href="https://maps.app.goo.gl/ZHYWfmxRiKVdQzJc6" target="_blank">Ինչպես հասնել</a>
        </div>
    )
}