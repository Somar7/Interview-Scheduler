import React from 'react';
import 'components/Appointment/styles.scss'
import Header from "./Header"
import Empty from "./Empty";
import Show from './Show';
import useVisualMode from "hooks/useVisualMode";
import Form from './Form';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE ="CREATE";



 export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
    console.log("props.interviewers2", props.interviewers);
   return (
   
   <article className="appointment">

      <Header time={props.time}/>
      {mode === EMPTY && <Empty  onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (<Show student={props.interview.student} interview={props.interview.interviewer}/>)}
      {mode === CREATE && <Form onCancel={()=> back()} interviewers={props.interviewers}/>}
      {/* {props.interview ? (<Show student={props.interview.student} interview={props.interview.interviewer}/>) : <Empty />} */}
   </article>
   )
 }