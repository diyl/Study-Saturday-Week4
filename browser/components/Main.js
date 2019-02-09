import React, { Component } from "react";
import axios from "axios";

import StudentList from "./StudentList.js";
import SingleStudent from "./SingleStudent.js";
import NewStudentForm from "./NewStudentForm";

const initialState = {
  students: [],
  selectedStudent: {},
  visibility: false,
  formInfo: { firstName: "", lastName: "", email: "" }
};

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.inputChange = this.inputChange.bind(this);
    this.inputSubmit = this.inputSubmit.bind(this);
    this.selectStudent = this.selectStudent.bind(this);
    this.handleVisibility = this.handleVisibility.bind(this);
  }

  handleVisibility() {
    return this.setState({
      visibility: !this.state.visibility
    });
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log("fetching");
    try {
      const { data } = await axios.get("/student");
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }
  async inputSubmit() {
    event.preventDefault();
    const { firstName, lastName, email } = this.state.formInfo;

    // console.log(taskValue);
    // console.log(assignValue);
    const { data } = await Axios.post("/student", {
      firstName,
      lastName,
      email
    });
    this.props.addStudent(data);
    this.setState(initialState);
  }

  inputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  selectStudent(student) {
    return this.setState({
      selectedStudent: student
    });
  }

  addStudent(obj) {
    this.setState({ students: [...this.state.students, obj] });
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
        <button onClick={this.handleVisibility}>Add Student</button>
        {this.state.visibility ? (
          <NewStudentForm
            inputChange={this.inputChange}
            inputSubmit={this.inputSubmit}
            formInfo={this.state.formInfo}
          />
        ) : null}
      </div>
    );
  }
}
