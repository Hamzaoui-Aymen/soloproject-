import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AllBikes from './components/AllBikes.jsx';
import CreateBike from './components/CreateBike.jsx';
import SingleBike from './components/SingleBike.jsx';
import Search from './components/Search.jsx';
import Update from './components/Update.jsx';

const App = () => {
  const [view, setView] = useState('AllBikes');
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [oneData, setOneData] = useState([]);

  const fetchBikes = () => {
    axios.get('http://localhost:8080/api/getAllBikes')
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBikes();
  }, [refresh]);

  const changeView = (newView) => {
    setView(newView);
  };

  const createBike = (newData) => {
    axios.post('http://localhost:8080/api/add', newData)
      .then(() => {
        console.log('Success');
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateBike = (id, data) => {
    axios.put(`http://localhost:8080/api/update/${id}`, data)
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  const deleteBike = (id) => {
    axios.delete(`http://localhost:8080/api/delete/${id}`)
      .then(() => {
        console.log('Data deleted');
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const singleBike = (oneItem) => {
    setOneData(oneItem);
    changeView('SingleBike');
  };

  const searching = (value) => {
    const filteredData = data.filter((bike) =>
      bike.name.toLowerCase().includes(value.toLowerCase())
    );

    setData(filteredData);

    if (filteredData.length === 0) {
      alert('No matching bikes found');
    }
  };

  const renderView = () => {
    if (view === 'AllBikes') {
      return <AllBikes data={data} singleBike={singleBike} deleteBike={deleteBike} updateBike={updateBike} setView={setView} setOneData={setOneData} />;
    } else if (view === 'CreateBike') {
      return <CreateBike createBike={createBike} changeView={changeView} />;
    } else if (view === 'Update') {
      return <Update updateBike={updateBike} oneData={oneData} />;
    }
  };

  return (
    <div>
      <nav className="bike-nav">
        <div
          className={view !== 'CreateBike' ? 'nav-unselected' : 'nav-selected'}
          onClick={() => {
            changeView('CreateBike');
          }}
        >
          CREATE RENT BIKE
        </div>
        <div
          className={view === 'AllBikes' ? 'nav-selected' : 'nav-unselected'}
          onClick={() => changeView('AllBikes')}
        >
          ALL RENT BIKES
        </div>
        <div>
          <Search searchBikes={searching} />
        </div>
      </nav>
      <div className="username">{window.location.search}</div>
      {renderView()}
    </div>
  );
};

export default App;
