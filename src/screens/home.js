import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ThemeConsumer } from '../contex/themeContex';
import { loadCourses } from '../actions/coursesAction';
import { loadAuthors } from '../actions/authorsAction';

class home extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    props.loadCourses();
    props.loadAuthors();
   
  }

  componentDidMount = () => {
    console.log('componentDidMount');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log('shouldComponentUpdate');
    return true
  }
  

  componentWillUpdate = (nextProps, nextState) => {
    console.log('componentWillUpdate');
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('componentDidUpdate')
  }

  componentWillUnmount = () => {
    console.log('componentWillUnmount')
  }

  componentDidCatch = () => {
    console.log('componentDidCatch')
  }

  

  displayAuthorName = (id) => {
      const {authors: { data }} = this.props;
      const author = data.find(x => x.id === id);
      if(!author)  return '';
      return `${author.firstName} ${author.lastName}`;
  }
  
  render() {
    const {authors, courses} = this.props;

    console.log(authors);
    console.log(courses);
    if(courses.loading) {
        return (<h2>Loding Data...</h2>);
    }
    if(courses.error) {
        return (<h2>Oops! something went worong!!!</h2>);
    }
    return (
        <ThemeConsumer>
      {(data) => <div>
        <h1>Courses</h1>
        <h1>{data.value}</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Link</th>
                    <th>Author</th>
                    <th>Length</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {
                    courses && courses.data && courses.data.map((item) => (<tr key={item.id}>
                        <td>{item.title}</td>
                        <td><a href={item.watchHref}>Course Link</a></td>
                        <td>{this.displayAuthorName(item.authorId)}</td>
                        <td>{item.length}</td>
                        <td>{item.category}</td>
                    </tr>))
                }
            </tbody>
        </table>
      </div>}
      </ThemeConsumer>
    )
  }
}

const mapStateToProps = (state) => ({
    authors: state.authors,
    courses: state.courses
});

const mapDispatchToProps = (dispatch) => ({
    loadCourses: () => loadCourses()(dispatch),
    loadAuthors: () => loadAuthors()(dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(home);
