const styles = {
    container: {
        margin: '10vh 10vw',
        fontSize: '20px',
        title: {
            color: 'cyan'
        },
        link: {
            textDecoration: 'none'
        }
    }
}

export const About = () => {
    return (
        <div style={ styles.container }>
            <hr />
            <h1 style={ styles.container.title }>Alta Empleados</h1><hr /><br />
            <p>Aplicación CRUD realizado para el challenge Gotam-Upe por{ ' ' }
                <a style={ styles.container.link } href="www.linkedin.com/in/germanmacchia" target="_blank">Germán O. Macchia</a></p>
            <hr />
            <h2>Mejoras a realizar:</h2><hr />
            <ul>
                <li>Login para admin</li><br />
                <li>Avatares para empleado</li><br />
                <li>Responsive design</li>
            </ul>
            <hr />
            <h2>Repositorios:</h2><hr />
            <ul>
                <li><a style={ styles.container.link } href="https://github.com/GermanMacchia/alta_personal_frt" target="_blank">Front End</a></li><br />
                <li><a style={ styles.container.link } href="https://github.com/GermanMacchia/alta_personal_bck" target="_blank">Back End</a></li>
            </ul>
        </div>
    )
}
