import React, { Component } from "react";

export default function NewStudentForm(props) {
  return (
    <form onSubmit={props.inputSubmit}>
      <label htmlFor="firstName">Firstname:</label>
      <input
        type="text"
        name="firstName"
        value={props.formInfo.firstName}
        onChange={props.inputChange}
      />
      <label htmlFor="lastName">Surname:</label>
      <input
        type="text"
        name="lastName"
        value={props.formInfo.lastName}
        onChange={this.props.inputChange}
      />
      <label htmlFor="email">email:</label>
      <input
        type="text"
        name="email"
        value={props.formInfo.email}
        onChange={this.props.inputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
