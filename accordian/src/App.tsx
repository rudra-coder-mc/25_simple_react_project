import "./App.css";
import { useState } from "react";
import data from "./data.ts";
function App() {
  const [selected, setSelected] = useState<number | null>(null);
  const [multiSelect, setMultiSelect] = useState<boolean>(false);
  const [multi, setMulti] = useState<number[]>([]);
  const handelSingleSelect = (getId: number): void => {
    // console.log(getId);
    setSelected(getId == selected ? null : getId);
  };

  const handelMultiSelect = (getId: number): void => {
    const tempMulti = [...multi];
    const findeMulti = tempMulti.indexOf(getId);
    if (findeMulti === -1) tempMulti.push(getId);
    else tempMulti.splice(findeMulti);

    setMulti(tempMulti);
  };

  return (
    <>
      <div>
        {data.length > 0 ? (
          <div className="container">
            <div className="cbtn" onClick={() => setMultiSelect(!multiSelect)}>
              multi selection
            </div>
            {data.map((data) => {
              return (
                <div className="contente" key={data.id}>
                  <div
                    className="question"
                    onClick={
                      multiSelect
                        ? () => handelMultiSelect(data.id)
                        : () => handelSingleSelect(data.id)
                    }
                  >
                    <div>{data.question}</div> <span>+</span>
                  </div>
                  {}
                  {multiSelect ? (
                    multi.indexOf(data.id) !== -1 && (
                      <div className="answer">{data.answer}</div>
                    )
                  ) : selected && selected == data.id ? (
                    <div className="answer">{data.answer}</div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : (
          <div> data is not fetch re-lode </div>
        )}
      </div>
    </>
  );
}

export default App;
