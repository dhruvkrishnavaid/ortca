import { ChangeEvent, Component } from "react";

interface FormState {
  secretCode: string | number;
  classCode: string | number;
  year: string;
  term: string;
}

const SelectTerm = (props: { yearValue: any; classCode: any }) => {
  var e = props.yearValue;
  var c = props.classCode.slice(0, -2);
  var isBoard: boolean;
  if (c == "10" || c == "12") {
    isBoard = true;
  } else {
    isBoard = false;
  }
  if (e == "2021 - 22") {
    return (
      <>
        <option className="">Periodic test 1</option>
        <option className="">Half yearly + Periodic test 1</option>
        {isBoard ? (
          <>
            <option className="">Term 1 Preboard 1</option>
            <option className="">Term 2 Preboard 1</option>
            <option className="">Term 2 Preboard 2</option>
          </>
        ) : null}
        <option className="">Finals</option>
      </>
    );
  } else if (e == "2022 - 23") {
    return (
      <>
        <option className="">Periodic test 1</option>
        <option className="hidden">Half yearly + Periodic test 1</option>
        <option className="hidden">Finals</option>
      </>
    );
  } else {
    return null;
  }
};

class Form extends Component<{}, FormState> {
  constructor(props: any) {
    super(props);
    this.handleSecretCodeChange = this.handleSecretCodeChange.bind(this);
    this.handleClassCodeChange = this.handleClassCodeChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleDownload = this.handleDownload.bind(this);

    this.state = {
      secretCode: "",
      classCode: "",
      year: "2021 - 22",
      term: "Periodic test 1",
    };
  }

  handleSecretCodeChange(event: ChangeEvent<HTMLInputElement>) {
    var secretCode = this.state.secretCode;
    var modifiedValue = event.target.value;
    secretCode = modifiedValue;
    this.setState({
      secretCode: secretCode,
    });
  }

  handleClassCodeChange(event: ChangeEvent<HTMLInputElement>) {
    var classCode = this.state.classCode;
    var modifiedValue = event.target.value;
    classCode = modifiedValue;
    this.setState({
      classCode: classCode,
    });
  }

  handleYearChange(event: ChangeEvent<HTMLSelectElement>) {
    var year = this.state.year;
    var modifiedValue = event.target.value;
    year = modifiedValue;
    this.setState({
      year: year,
    });
  }

  handleTermChange(event: ChangeEvent<HTMLSelectElement>) {
    var term = this.state.term;
    var modifiedValue = event.target.value;
    term = modifiedValue;
    this.setState({
      term: term,
    });
  }

  handleDownload() {
    var secretCode = this.state.secretCode;
    var classCode = this.state.classCode;
    var year = this.state.year;
    var term = this.state.term;
    var yearCode = "";
    var termCode = "";

    switch (year) {
      case "2021 - 22":
        yearCode = "13";
        break;
      case "2022 - 23":
        yearCode = "14";
        break;
    }

    switch (term) {
      case "Periodic test 1":
        termCode = "5";
        break;
      case "Half yearly + Periodic test 1":
        termCode = "1";
        break;
      case "Term 1 Preboard 1":
        termCode = "16";
        break;
      case "Term 2 Preboard 1":
        termCode = "17";
        break;
      case "Term 2 Preboard 2":
        termCode = "20";
        break;
      case "Finals":
        termCode = "2";
        break;
    }

    var uri =
      "https://acsnskoolapps.in/Admin2020/RepocardPrintingind/" +
      classCode +
      "_" +
      termCode +
      "_" +
      secretCode +
      "_" +
      yearCode;
    window.open(uri, "_blank");
  }

  render() {
    return (
      <div className="p-7" id="form">
        <form>
          <div className="mb-6 lg:flex">
            <label
              htmlFor="secretCode"
              className="block lg:mt-2 mb-2 text-md font-semibold text-gray-900 dark:text-gray-300"
            >
              Your secret code
            </label>
            <input
              type="number"
              id="secretCode"
              value={this.state.secretCode}
              placeholder="E.g. 1024"
              className="focus:outline-none lg:ml-5 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg drop-shadow-sm focus:ring-blue-500 focus:border-blue-500 block lg:w-1/2 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={this.handleSecretCodeChange}
            />
          </div>
          <div className="mb-6 lg:flex">
            <label
              htmlFor="classCode"
              className="block lg:mt-2 mb-2 text-md font-semibold text-gray-900 dark:text-gray-300"
            >
              Your class code
            </label>
            <input
              type="number"
              id="classCode"
              value={this.state.classCode}
              placeholder="E.g. 904"
              className="focus:outline-none lg:ml-7 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg drop-shadow-sm focus:ring-blue-500 focus:border-blue-500 block lg:w-1/2 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={this.handleClassCodeChange}
            />
          </div>
          <div className="mb-6 lg:flex">
            <label
              htmlFor="year"
              className="block lg:mt-2 mb-2 mr-1 text-md font-semibold text-gray-900 dark:text-gray-300"
            >
              Choose year
            </label>
            <select
              id="year"
              value={this.state.year}
              className="focus:outline-none lg:ml-12 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg drop-shadow-sm focus:ring-blue-500 focus:border-blue-500 block lg:w-1/2 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={this.handleYearChange}
            >
              <option>2021 - 22</option>
              <option>2022 - 23</option>
            </select>
          </div>
          <div className="mb-6 lg:flex">
            <label
              htmlFor="term"
              className="block lg:mt-2 mb-2 mr-1 text-md font-semibold text-gray-900 dark:text-gray-300"
            >
              Choose term
            </label>
            <select
              id="term"
              className="focus:outline-none lg:ml-12 bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg drop-shadow-sm focus:ring-blue-500 focus:border-blue-500 block lg:w-1/2 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={this.handleTermChange}
            >
              <SelectTerm
                yearValue={this.state.year}
                classCode={this.state.classCode}
              />
            </select>
          </div>
          <button
            type="button"
            id="download"
            className="text-white focus:outline-none font-semibold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center bg-gradient-to-br from-green-400 to-blue-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-sm drop-shadow-sm disabled:shadow-none disabled:text-gray-500 disabled:from-gray-100 disabled:via-gray-200 disabled:to-gray-300"
            disabled={
              !(this.state.secretCode != "" && this.state.classCode != "")
            }
            onClick={this.handleDownload}
          >
            Download
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
