import React, { Component } from 'react';
import '../css/App.css';
import TopSection from './TopSection';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TopSection />
        <div className="row">
          <div className="col-sm-6 list-group-item">
            <List header="Eti's List" list="groceriesEti" img="https://lh3.googleusercontent.com/WBZgqB3VxZOS-cUGMVhJh2NGSeq6A4EXuKbTNB0iufH1CcV-SBM4SziVF70JCPaIKUpBJ5B3c8gxW46pWfc2YaHfymysI7IgQ-leiVEDaoOQAPBR5IGGonHzTJJeRR6vOtgu3Vi-HlICtyg77_eYj54xkw6oDekKUw5MalsP582QzHur7AJdai5f2c4ireo23Hvj3Tq16SLgbKmhwn5BS8EiIG-vq_NjCxLdF0-iRBVUfdClcejAZizJP4ZOWEUEbcsGrBWE9YV7ptmSiTV4GA_wMhcSzlS-2MeviKCDgzF6NlBa2rTEDmr608Rjm39xTA5AQiDb3FTCF-QOVk9wGc_KZxMUVQdKjapBOYrqcIbZTF-fU7x3Kg7Xzl9-k6qp0k_pqZplGs0VAXTxOCLBxJEkvVJHUn-stDzwJNskn32laDpzoT5lRZ-PeSyPixMhaPFVhYRzN-fmOLi0vuDsfGHHz1oYRP1612gsCeSXVkClL5Uc3Ka5zEQMlILLiN0TX7fcPP8ws9RGX3ZbStFYiDp-vTDAQL9400CxEC4pXQdiT_wtbAsb8XTiJCIA4NlbzfNemIJoVPo0Uk7gMHe-Vq4iGp3n-ugtMWRrC3nlgQ=w478-h637-no" />
          </div>
          <div className="col-sm-6 list-group-item">
            <List header="Gila's List" list="groceriesGila" img="https://images.halloweencostumes.com/products/40646/1-1/adult-eggplant-costume.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
