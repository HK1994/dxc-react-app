import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contex/themeContex';

export default class home extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        couresData: [],
        authorsData: [],
        error: false,
    }
   
  }

  componentDidMount = () => {
    this.fetchData();
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

  fetchData = async () => {
      try {
            this.setState({ loading: true });
            const loadCouses = fetch('http://localhost:3004/courses');
            const loadAuthors = fetch('http://localhost:3004/authors');
            const res = await Promise.all([loadCouses, loadAuthors]);
            const couresData = await res[0].json();
            const authorsData = await res[1].json();
            this.setState({loading: false, couresData, authorsData });
        } catch (error) {
            this.setState({loading: false, error });
        }
  }

  displayAuthorName = (id) => {
      const {authorsData} = this.state;
      const author = authorsData.find(x => x.id === id);
      if(!author)  return '';
      return `${author.firstName} ${author.lastName}`;
  }
  
  render() {
    const {loading, couresData, authorsData, error} = this.state;
    if(loading) {
        return (<h2>Loding Data...</h2>);
    }
    if(error) {
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
                    couresData && couresData.map((item) => (<tr key={item.id}>
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
