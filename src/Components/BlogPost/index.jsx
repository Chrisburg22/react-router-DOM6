import { NavLink, useNavigate, useParams } from 'react-router-dom';
import {blogData} from '../../Data/blogData';

export const BlogPost = () => {
  /**
    Con este Hook podemos conocer los parametros que son usados en la etiqueta Router
    la cual va a utilizar este componente para renderizarlo en una ruta dinamica.
  */
  const {slug} = useParams();
  /**
   * EL hook useNAvigate nos ayuda a navegar por nuestr aplicación. La ventaja es que podemos decirle hacia donde queremos
   * que se dirija, con esto podemos crear más botones que puedan navegar.
   */
  const navigate = useNavigate();
  const returnToBlog = () => {
    navigate('/blog');
  }
  /**
    Vamos a recorrer el arreglo de los datos ya definidos y comparar cuando el slug definido anteriormente y 
    la propiedad slug de nuestro arreglo coisidan, cunado esto ocurra nuestra nueva constante sera el objeto
    que encontramos. 
   */
  const blogPost = blogData.find(post => post.slug === slug);

  return (
    <>
    <h2>{blogPost.title}</h2>
    <p>{blogPost.author}</p>
    <p>{blogPost.content}</p>
    <button onClick={returnToBlog} >Volver al Blog</button>
    </>
  );
}

