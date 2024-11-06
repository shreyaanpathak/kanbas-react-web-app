import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";
import { useSelector } from "react-redux";

export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
      <VariablesAndConstants /><br />
      <VariableTypes /><br />
      <BooleanVariables /><br />
      <IfElse /><br />
      <TernaryOperator /><br />
      <ConditionalOutputIfElse /><br />
      <ConditionalOutputInline /><br />
      <ArrowFunctions /><br />
      <ImpliedReturn /><br />
      <TemplateLiterals /><br />
      <SimpleArrays /><br />
      <ArrayIndexAndLength /><br />
      <AddingAndRemovingToFromArrays /><br />
      <ForLoops /><br />
      <MapFunction /><br />
      <FindFunction /><br />
      <FindIndex /><br />
      <FilterFunction /><br />
      <JsonStringify /><br />
      <House /><br />
      <TodoItem /><br />
      <TodoList /><br />
      <Spreading /><br />
      <Destructing /><br />
      <FunctionDestructing /><br />
      <DestructingImports /><br />
      <Classes /><br />
      <Styles /><br />
      <Add a={3} b={4} /><br />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight><br />
      <AddPathParameters /><br />
      <PathParameters /><br />
    </div>
  );
}
