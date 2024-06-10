import { useState } from "react";
import styles from "./Login.module.css"


function Login(params) {
    const [nome,setNome] = useState()
    
    const [senha,setSenha] = useState()
    
    return (
    <form action="http://localhost:8080/login" method="post" className={styles.loginCaixa}>
        <h1>Login</h1>
        <input type="text" placeholder="Nome" id="login" name="nome" className={styles.inputLogin} onChange={(e)=> setNome(e.target.value)} />
        <br></br>
        <input type="password" placeholder="Senha" id="senha" name="senha" className={styles.inputLogin} onChange={(e)=> setSenha(e.target.value)}/>
        <br></br>
        <input class= "button" type="submit" className={styles.buttonLogin} ></input>
    </form>
    )
}

export default Login;