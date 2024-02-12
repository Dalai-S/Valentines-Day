import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Точно-преточно нет?",
      "А ну-ка, подумай еще разок!",
      "Серьёзно так решила?",
      "Эй, не спеши с ответом!",
      "Ты же знаешь, это последний шансик!",
      "Вот уж не ожидал от тебя такого, а?",
      "Вдруг пожалеешь – и что тогда?",
      "Давай, перебери варианты еще раз!",
      "Ты уверена на все сто пудов?",
      "Ой, кажется, кто-то собирается на лёд тонкий!",
      "Будь добрее, а?",
      "Так, стоп! Разморозь сердечко!",
      "А вдруг захочешь обратно? Передумай!",
      "Эх, не хочешь ли ты это обдумать заново?",
      "Это твой последний слово, да?",
      "Ай-яй-яй, моё сердце на кусочки ;(",
      "Сто процентов уверен? На все сто?",
      "Ты на краю пропасти, думай!",
      "Да будь милее, ну!",
      "Остановись, дай сердцу голос!",
      "Может, все же передумаешь?",
      "Перед тем как прыгнуть, посмотри!",
      "Так, ну это твоё слово последнее?",
      "Ох, и давай мне тогда платок (((",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media1.tenor.com/m/jjM8wEXXNqwAAAAd/kiss.gif" />
            <div className="text-container">Ну спасибочки !!! :3 </div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://media1.tenor.com/m/knRCenmW3yMAAAAC/eid.gif"
            />
            <h1 className="text-container">
              Карина, будешь ли ты моей валентинкой?
            </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Да
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Нет" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
