import styled from "styled-components";
import { sliderItems } from "../data.js";

const Container = styled.div`
height: 250px;
display: flex;
overflow-y: hidden;
overflow-x: scroll;
width: 100vw;
z-index : 998;
object-fit: contain;
&::-webkit-scrollbar{
    display: none;
}
@media only screen and (max-width: 950px) {
  {
   height: 150px;
  }}
`;


const Image = styled.img`
flex: 1;
width: 100%;
height: 100%;
margin: 1px 15px 8px;
border-radius: 10px;
cursor: pointer;
transition: transform 450ms;

&:hover{
    transform: scale(1.01);
}
`;

const Slides = () => {
   return (
    <Container>
 
    {sliderItems.map((item)=>(
    <Image key={item.id} src={item.img}/>
    ))}
   
   </Container>
   )
}


export default Slides