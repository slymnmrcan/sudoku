import { useState,useRef } from 'react';
import './App.css';
function App() {

  const [satir1sutun1, setsatir1sutun1] = useState()
  const [satir1sutun2, setsatir1sutun2] = useState()
  const [satir1sutun3, setsatir1sutun3] = useState()
  const [satir1sutun4, setsatir1sutun4] = useState()
  const [satir1sutun5, setsatir1sutun5] = useState()
  const [satir1sutun6, setsatir1sutun6] = useState()
  const [satir1sutun7, setsatir1sutun7] = useState()
  const [satir1sutun8, setsatir1sutun8] = useState()
  const [satir1sutun9, setsatir1sutun9] = useState()

  const [satir2sutun1, setsatir2sutun1] = useState()
  const [satir2sutun2, setsatir2sutun2] = useState()
  const [satir2sutun3, setsatir2sutun3] = useState()
  const [satir2sutun4, setsatir2sutun4] = useState()
  const [satir2sutun5, setsatir2sutun5] = useState()
  const [satir2sutun6, setsatir2sutun6] = useState()
  const [satir2sutun7, setsatir2sutun7] = useState()
  const [satir2sutun8, setsatir2sutun8] = useState()
  const [satir2sutun9, setsatir2sutun9] = useState()

  const [satir3sutun1, setsatir3sutun1] = useState()
  const [satir3sutun2, setsatir3sutun2] = useState()
  const [satir3sutun3, setsatir3sutun3] = useState()
  const [satir3sutun4, setsatir3sutun4] = useState()
  const [satir3sutun5, setsatir3sutun5] = useState()
  const [satir3sutun6, setsatir3sutun6] = useState()
  const [satir3sutun7, setsatir3sutun7] = useState()
  const [satir3sutun8, setsatir3sutun8] = useState()
  const [satir3sutun9, setsatir3sutun9] = useState()

  const [satir4sutun1, setsatir4sutun1] = useState()
  const [satir4sutun2, setsatir4sutun2] = useState()
  const [satir4sutun3, setsatir4sutun3] = useState()
  const [satir4sutun4, setsatir4sutun4] = useState()
  const [satir4sutun5, setsatir4sutun5] = useState()
  const [satir4sutun6, setsatir4sutun6] = useState()
  const [satir4sutun7, setsatir4sutun7] = useState()
  const [satir4sutun8, setsatir4sutun8] = useState()
  const [satir4sutun9, setsatir4sutun9] = useState()

  const [satir5sutun1, setsatir5sutun1] = useState()
  const [satir5sutun2, setsatir5sutun2] = useState()
  const [satir5sutun3, setsatir5sutun3] = useState()
  const [satir5sutun4, setsatir5sutun4] = useState()
  const [satir5sutun5, setsatir5sutun5] = useState()
  const [satir5sutun6, setsatir5sutun6] = useState()
  const [satir5sutun7, setsatir5sutun7] = useState()
  const [satir5sutun8, setsatir5sutun8] = useState()
  const [satir5sutun9, setsatir5sutun9] = useState()

  const [satir6sutun1, setsatir6sutun1] = useState()
  const [satir6sutun2, setsatir6sutun2] = useState()
  const [satir6sutun3, setsatir6sutun3] = useState()
  const [satir6sutun4, setsatir6sutun4] = useState()
  const [satir6sutun5, setsatir6sutun5] = useState()
  const [satir6sutun6, setsatir6sutun6] = useState()
  const [satir6sutun7, setsatir6sutun7] = useState()
  const [satir6sutun8, setsatir6sutun8] = useState()
  const [satir6sutun9, setsatir6sutun9] = useState()

  const [satir7sutun1, setsatir7sutun1] = useState()
  const [satir7sutun2, setsatir7sutun2] = useState()
  const [satir7sutun3, setsatir7sutun3] = useState()
  const [satir7sutun4, setsatir7sutun4] = useState()
  const [satir7sutun5, setsatir7sutun5] = useState()
  const [satir7sutun6, setsatir7sutun6] = useState()
  const [satir7sutun7, setsatir7sutun7] = useState()
  const [satir7sutun8, setsatir7sutun8] = useState()
  const [satir7sutun9, setsatir7sutun9] = useState()

  const [satir8sutun1, setsatir8sutun1] = useState()
  const [satir8sutun2, setsatir8sutun2] = useState()
  const [satir8sutun3, setsatir8sutun3] = useState()
  const [satir8sutun4, setsatir8sutun4] = useState()
  const [satir8sutun5, setsatir8sutun5] = useState()
  const [satir8sutun6, setsatir8sutun6] = useState()
  const [satir8sutun7, setsatir8sutun7] = useState()
  const [satir8sutun8, setsatir8sutun8] = useState()
  const [satir8sutun9, setsatir8sutun9] = useState()

  const [satir9sutun1, setsatir9sutun1] = useState()
  const [satir9sutun2, setsatir9sutun2] = useState()
  const [satir9sutun3, setsatir9sutun3] = useState()
  const [satir9sutun4, setsatir9sutun4] = useState()
  const [satir9sutun5, setsatir9sutun5] = useState()
  const [satir9sutun6, setsatir9sutun6] = useState()
  const [satir9sutun7, setsatir9sutun7] = useState()
  const [satir9sutun8, setsatir9sutun8] = useState()
  const [satir9sutun9, setsatir9sutun9] = useState()

  const satir1sutun1ref = useRef();

  const changeHandlesatir1sutun1 = (e) => { setsatir1sutun1(e.target.value) }
  const changeHandlesatir1sutun2 = (e) => { setsatir1sutun2(e.target.value) }
  const changeHandlesatir1sutun3 = (e) => { setsatir1sutun3(e.target.value) }
  const changeHandlesatir1sutun4 = (e) => { setsatir1sutun4(e.target.value) }
  const changeHandlesatir1sutun5 = (e) => { setsatir1sutun5(e.target.value) }
  const changeHandlesatir1sutun6 = (e) => { setsatir1sutun6(e.target.value) }
  const changeHandlesatir1sutun7 = (e) => { setsatir1sutun7(e.target.value) }
  const changeHandlesatir1sutun8 = (e) => { setsatir1sutun8(e.target.value) }
  const changeHandlesatir1sutun9 = (e) => { setsatir1sutun9(e.target.value) }

  const changeHandlesatir2sutun1 = (e) => { setsatir2sutun1(e.target.value) }
  const changeHandlesatir2sutun2 = (e) => { setsatir2sutun2(e.target.value) }
  const changeHandlesatir2sutun3 = (e) => { setsatir2sutun3(e.target.value) }
  const changeHandlesatir2sutun4 = (e) => { setsatir2sutun4(e.target.value) }
  const changeHandlesatir2sutun5 = (e) => { setsatir2sutun5(e.target.value) }
  const changeHandlesatir2sutun6 = (e) => { setsatir2sutun6(e.target.value) }
  const changeHandlesatir2sutun7 = (e) => { setsatir2sutun7(e.target.value) }
  const changeHandlesatir2sutun8 = (e) => { setsatir2sutun8(e.target.value) }
  const changeHandlesatir2sutun9 = (e) => { setsatir2sutun9(e.target.value) }

  const changeHandlesatir3sutun1 = (e) => { setsatir3sutun1(e.target.value) }
  const changeHandlesatir3sutun2 = (e) => { setsatir3sutun2(e.target.value) }
  const changeHandlesatir3sutun3 = (e) => { setsatir3sutun3(e.target.value) }
  const changeHandlesatir3sutun4 = (e) => { setsatir3sutun4(e.target.value) }
  const changeHandlesatir3sutun5 = (e) => { setsatir3sutun5(e.target.value) }
  const changeHandlesatir3sutun6 = (e) => { setsatir3sutun6(e.target.value) }
  const changeHandlesatir3sutun7 = (e) => { setsatir3sutun7(e.target.value) }
  const changeHandlesatir3sutun8 = (e) => { setsatir3sutun8(e.target.value) }
  const changeHandlesatir3sutun9 = (e) => { setsatir3sutun9(e.target.value) }

  const changeHandlesatir4sutun1 = (e) => { setsatir4sutun1(e.target.value) }
  const changeHandlesatir4sutun2 = (e) => { setsatir4sutun2(e.target.value) }
  const changeHandlesatir4sutun3 = (e) => { setsatir4sutun3(e.target.value) }
  const changeHandlesatir4sutun4 = (e) => { setsatir4sutun4(e.target.value) }
  const changeHandlesatir4sutun5 = (e) => { setsatir4sutun5(e.target.value) }
  const changeHandlesatir4sutun6 = (e) => { setsatir4sutun6(e.target.value) }
  const changeHandlesatir4sutun7 = (e) => { setsatir4sutun7(e.target.value) }
  const changeHandlesatir4sutun8 = (e) => { setsatir4sutun8(e.target.value) }
  const changeHandlesatir4sutun9 = (e) => { setsatir4sutun9(e.target.value) }

  const changeHandlesatir5sutun1 = (e) => { setsatir5sutun1(e.target.value) }
  const changeHandlesatir5sutun2 = (e) => { setsatir5sutun2(e.target.value) }
  const changeHandlesatir5sutun3 = (e) => { setsatir5sutun3(e.target.value) }
  const changeHandlesatir5sutun4 = (e) => { setsatir5sutun4(e.target.value) }
  const changeHandlesatir5sutun5 = (e) => { setsatir5sutun5(e.target.value) }
  const changeHandlesatir5sutun6 = (e) => { setsatir5sutun6(e.target.value) }
  const changeHandlesatir5sutun7 = (e) => { setsatir5sutun7(e.target.value) }
  const changeHandlesatir5sutun8 = (e) => { setsatir5sutun8(e.target.value) }
  const changeHandlesatir5sutun9 = (e) => { setsatir5sutun9(e.target.value) }

  const changeHandlesatir6sutun1 = (e) => { setsatir6sutun1(e.target.value) }
  const changeHandlesatir6sutun2 = (e) => { setsatir6sutun2(e.target.value) }
  const changeHandlesatir6sutun3 = (e) => { setsatir6sutun3(e.target.value) }
  const changeHandlesatir6sutun4 = (e) => { setsatir6sutun4(e.target.value) }
  const changeHandlesatir6sutun5 = (e) => { setsatir6sutun5(e.target.value) }
  const changeHandlesatir6sutun6 = (e) => { setsatir6sutun6(e.target.value) }
  const changeHandlesatir6sutun7 = (e) => { setsatir6sutun7(e.target.value) }
  const changeHandlesatir6sutun8 = (e) => { setsatir6sutun8(e.target.value) }
  const changeHandlesatir6sutun9 = (e) => { setsatir6sutun9(e.target.value) }

  const changeHandlesatir7sutun1 = (e) => { setsatir7sutun1(e.target.value) }
  const changeHandlesatir7sutun2 = (e) => { setsatir7sutun2(e.target.value) }
  const changeHandlesatir7sutun3 = (e) => { setsatir7sutun3(e.target.value) }
  const changeHandlesatir7sutun4 = (e) => { setsatir7sutun4(e.target.value) }
  const changeHandlesatir7sutun5 = (e) => { setsatir7sutun5(e.target.value) }
  const changeHandlesatir7sutun6 = (e) => { setsatir7sutun6(e.target.value) }
  const changeHandlesatir7sutun7 = (e) => { setsatir7sutun7(e.target.value) }
  const changeHandlesatir7sutun8 = (e) => { setsatir7sutun8(e.target.value) }
  const changeHandlesatir7sutun9 = (e) => { setsatir7sutun9(e.target.value) }

  const changeHandlesatir8sutun1 = (e) => { setsatir8sutun1(e.target.value) }
  const changeHandlesatir8sutun2 = (e) => { setsatir8sutun2(e.target.value) }
  const changeHandlesatir8sutun3 = (e) => { setsatir8sutun3(e.target.value) }
  const changeHandlesatir8sutun4 = (e) => { setsatir8sutun4(e.target.value) }
  const changeHandlesatir8sutun5 = (e) => { setsatir8sutun5(e.target.value) }
  const changeHandlesatir8sutun6 = (e) => { setsatir8sutun6(e.target.value) }
  const changeHandlesatir8sutun7 = (e) => { setsatir8sutun7(e.target.value) }
  const changeHandlesatir8sutun8 = (e) => { setsatir8sutun8(e.target.value) }
  const changeHandlesatir8sutun9 = (e) => { setsatir8sutun9(e.target.value) }

  const changeHandlesatir9sutun1 = (e) => { setsatir9sutun1(e.target.value) }
  const changeHandlesatir9sutun2 = (e) => { setsatir9sutun2(e.target.value) }
  const changeHandlesatir9sutun3 = (e) => { setsatir9sutun3(e.target.value) }
  const changeHandlesatir9sutun4 = (e) => { setsatir9sutun4(e.target.value) }
  const changeHandlesatir9sutun5 = (e) => { setsatir9sutun5(e.target.value) }
  const changeHandlesatir9sutun6 = (e) => { setsatir9sutun6(e.target.value) }
  const changeHandlesatir9sutun7 = (e) => { setsatir9sutun7(e.target.value) }
  const changeHandlesatir9sutun8 = (e) => { setsatir9sutun8(e.target.value) }
  const changeHandlesatir9sutun9 = (e) => { setsatir9sutun9(e.target.value) }


  const [focusSatir, setfocusSatir] = useState(false)


  const sudokuNumberFunction = () => {
    const satir = Math.floor(Math.random() * (9 - 1) + 1);
    const sutun = Math.floor(Math.random() * (9 - 1) + 1);
    const rasgele = Math.floor(Math.random() * (9 - 1) + 1);
  }


  const changeHandle = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    const satir = inputName.split("", 12)
    const satirValue = satir[5];
    const sutunValue = satir[11];

    if (inputValue >= 1 && inputValue <= 9) {

    }
    else {
      e.target.value = "";
    }
      //test

  }
  const focusHandle = (e) => {
    const sabit = 1;
    const inputName = e.target.name;
    const satir = inputName.split("", 12)
    const satirValue = satir[5];
    const sutunValue = satir[11];
    e.target.value=""
    console.log("satır numarası" + " " + satirValue + "\n" + "sutun numarası " + sutunValue);
    //doğrulama yapılacak yerler
    if (satirValue == 1 && sutunValue == 1) {
      console.log("test");
    }


  }
  const InputClear = () => {
    let x = document.querySelectorAll("input[type='number']");
    x.forEach(element => {
      element.value="";
    });
    
  }


  return (
    <div>
      <table className="App fontsize">
        <tbody>
          <tr>
            <td><input type="number" ref={satir1sutun1ref} className="square borderles" name='satir1sutun1' value={satir1sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir1sutun2' value={satir1sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir1sutun3' value={satir1sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir1sutun4' value={satir1sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir1sutun5' value={satir1sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir1sutun6' value={satir1sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir1sutun7' value={satir1sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir1sutun8' value={satir1sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir1sutun9' value={satir1sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir1sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
          <tr>
            <td><input type="number" className="square borderles" name='satir2sutun1' value={satir2sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir2sutun2' value={satir2sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir2sutun3' value={satir2sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir2sutun4' value={satir2sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir2sutun5' value={satir2sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir2sutun6' value={satir2sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir2sutun7' value={satir2sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir2sutun8' value={satir2sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir2sutun9' value={satir2sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir2sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
          <tr>
            <td><input type="number" className="square borderles" name='satir3sutun1' value={satir3sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir3sutun2' value={satir3sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir3sutun3' value={satir3sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir3sutun4' value={satir3sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir3sutun5' value={satir3sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir3sutun6' value={satir3sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir3sutun7' value={satir3sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir3sutun8' value={satir3sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir3sutun9' value={satir3sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir3sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
          <tr>
            <td><input type="number" className="square borderles" name='satir4sutun1' value={satir4sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir4sutun2' value={satir4sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir4sutun3' value={satir4sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir4sutun4' value={satir4sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir4sutun5' value={satir4sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir4sutun6' value={satir4sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir4sutun7' value={satir4sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir4sutun8' value={satir4sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir4sutun9' value={satir4sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir4sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
          <tr>
            <td><input type="number" className="square borderles" name='satir5sutun1' value={satir5sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir5sutun2' value={satir5sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir5sutun3' value={satir5sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir5sutun4' value={satir5sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir5sutun5' value={satir5sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir5sutun6' value={satir5sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir5sutun7' value={satir5sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir5sutun8' value={satir5sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir5sutun9' value={satir5sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir5sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
          <tr>
            <td><input type="number" className="square borderles" name='satir6sutun1' value={satir6sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir6sutun2' value={satir6sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir6sutun3' value={satir6sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir6sutun4' value={satir6sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir6sutun5' value={satir6sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir6sutun6' value={satir6sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir6sutun7' value={satir6sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir6sutun8' value={satir6sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir6sutun9' value={satir6sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir6sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
          <tr>
            <td><input type="number" className="square borderles" name='satir7sutun1' value={satir7sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir7sutun2' value={satir7sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir7sutun3' value={satir7sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir7sutun4' value={satir7sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir7sutun5' value={satir7sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir7sutun6' value={satir7sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir7sutun7' value={satir7sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir7sutun8' value={satir7sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir7sutun9' value={satir7sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir7sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
          <tr>
            <td><input type="number" className="square borderles" name='satir8sutun1' value={satir8sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir8sutun2' value={satir8sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir8sutun3' value={satir8sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir8sutun4' value={satir8sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir8sutun5' value={satir8sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir8sutun6' value={satir8sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir8sutun7' value={satir8sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir8sutun8' value={satir8sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir8sutun9' value={satir8sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir8sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
          <tr>
            <td><input type="number" className="square borderles" name='satir9sutun1' value={satir9sutun1 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun1(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir9sutun2' value={satir9sutun2 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun2(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir9sutun3' value={satir9sutun3 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun3(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir9sutun4' value={satir9sutun4 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun4(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir9sutun5' value={satir9sutun5 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun5(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir9sutun6' value={satir9sutun6 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun6(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir9sutun7' value={satir9sutun7 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun7(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir9sutun8' value={satir9sutun8 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun8(e)} onFocus={e => focusHandle(e)} /></td>
            <td><input type="number" className="square borderles" name='satir9sutun9' value={satir9sutun9 || ""} autoComplete="off" onChange={e => changeHandlesatir9sutun9(e)} onFocus={e => focusHandle(e)} /></td>
          </tr>
        </tbody>
      </table>
      <div className='buttons'>
        <input type="button" value="Kontrol et" className='spacebuttons' />
        <input type="button" onClick={InputClear} value="Temizle" />
      </div>

    </div>
  );
}

export default App;
