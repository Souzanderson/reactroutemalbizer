import "./pagetwo.style.css";
import { NavigationRouter } from "../../services/router/router.service";


export const PageTwoComponent = () => {
  const handlerClickButton = (e: any) => NavigationRouter.go("");

  return (
    <div id="pagetwosection">
      <h1>This is Page 2</h1>
      <br />
      <br />
      <br />
      <br />
      <div className="button" onClick={handlerClickButton}>Go To Page 1</div>
    </div>
  );
};


