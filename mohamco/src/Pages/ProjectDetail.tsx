import NavBar from "../components/NavBar";
import test from "../src_assets/test.jpg";
import test1 from "../src_assets/230913.png";
import styles from "../styles/Header.module.css";


export function ProjectDetail() {


    return (
        <main>
            <NavBar></NavBar>
            <div className={styles.mainheader} style={{width: "100%"}}>
                <div className={styles.header}>
                    <img src={test1} ></img>
                </div>
                <div className="align-self-center" style={{textAlign: "center"}}>
                    <div className="col-8">
                        <h2>모함쿼</h2>
                    </div>
                    <br></br>
                
                </div>


            </div>
        </main>
    );
}