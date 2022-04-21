import { useState, Fragment } from 'react';
export const BgChanger = () => {
    /**
     * Declaracion del index de nuestro array
     */
    interface colorsArray {
        readonly [index: number]: string;
    }
    /**
     * Arrays necesarios para la funcionalidad
     * 
     * color: es el contenedor de los nombres de nuestros colores, necesarios para guardarlos en el estado bgcolor.
     */
    let color: colorsArray = ["IndianRed", "Pink", "LightSalmon", "OrangeRed", "Yellow", "SlateBlue", "LimeGreen", "Green", "Teal", "Maroon", "White"];
    /**
     * element: es el mismo array de los colores, pero utilizado para obtener el numero de estos, para que posteriormente
     *          los operemos para obtener un color.
     */
    let [element] = useState<string[] | null>(["IndianRed", "Pink", "LightSalmon", "OrangeRed", "Yellow", "SlateBlue", "LimeGreen", "Green", "Teal", "Maroon", "White"]);
    /**
     * bgcolor: aqui guardamos el color obtenido como un string.
     */
    let [bgcolor, setElement] = useState<string | null>('White');
    let coolor = "";
    /**
     * Operacion realizada para obtener un numero al azar entre los objetos de nuestro Array,
     * esta se realiza cada vez que se haga click en el boton.
     */
    const clickButton = () => {
        coolor = color![Math.floor(Math.random() * element!.length)];
        setElement(
            bgcolor = coolor,
        )
    }
    return (
        <Fragment>
            <header className="App-header" style={{ backgroundColor: bgcolor! }}>
                <button className='waves-effect waves-dark btn blue darken-2' onClick={clickButton}>
                    Click Me!
                </button>
                <p className='paragraph'>{bgcolor}</p>
            </header>
        </Fragment>
    );
}