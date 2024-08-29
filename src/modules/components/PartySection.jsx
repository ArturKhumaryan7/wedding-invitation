import { party } from "../utils/constatnt"

export const PartySection = () => {
    return (
        <div className="party-section">
            <div className="wedding-section-image">
                 <img src={party} alt="party"/>
            </div>
            <h3 className="wedding-section-title">Հարսանեկան հանդիսություն</h3>
            <h3 className="wedding-section-time">17։00</h3>
            <h3 className="wedding-section-church">Վիլլա (Ամառային սրահ)</h3>
            <span className="wedding-section-village">Կոտայքի մարզ, Ջրվեժ համայնք, 15-րդ փողոց, 10/2 շենք</span>
            <a href="https://maps.app.goo.gl/bJ7NXVmFT7EYAMxD8" target="_blank">Ինչպես հասնել</a>
        </div>
    )
}