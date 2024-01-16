
import PropTypes from "prop-types";

/*const newMessage = {
    message: 'Hola Mundo',
    title: 'Fernando'
};

const getMessage = ( {message} ) => message;*/

export const FirstApp = ( { title, subTitle, name} ) => {

    //console.log( props );

    return (
    <>
      {/*<h1>{ getMessage( newMessage ) }</h1>*/}
      {/*<code>{ JSON.stringify(newMessage) }</code>*/}
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
    );
  }

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  name: PropTypes.string,
}

FirstApp.defaultProps = {
  title: 'No hay título',
  subTitle: 'No hay subtítulo',
  name: 'Fernando Herrera'
}



//rafc