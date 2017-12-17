import React, { Component } from 'react';
import TopSection from './TopSection';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TopSection />
        <div className="row hebrew">
          <div className="col-sm-12 list-group-item">
            <List header="הרשימה של אתי" list="groceriesEti" img="https://lh3.googleusercontent.com/o1ZjoXaf6Q2TI_6xa4mewi_T7QHTkwyIPQIEU9H2A8hcANjdZcgIZ7AffWrovHvLLXB9TZ332sQPuVU3_QiCuwnagNJ4oQQCi6lxWC8Huie93T-J6Z4S4rxhASB-VNXHiDB6_gOnq5P87NcRp6owCkDyRDKACD_2UpILVNl6OlznAR9EBRfNncM6XuvD6gSN1DGpztSn2ZgG76M43QduuybBu9i0FjyP67JcvcJ_-bQY0409X0xtNQQc6LCq1JPySGT2HtVF4TQTtZ8UrOJUHoOKl387Ron4tw5lYlfd0CKHl6agvcxhHo1_QLINbJxWL7POgkCemTiOH-l0O9qaXY0hIYzJhp-Ig_N-B3I0UYesIHJjJ6Y7jh6jpPZH2zx3O15NMlHkOd6FKaN6YU_VcDC8yz9iXtGIN9_S8r5Ib59AVp67tbmXDdQkyrfC730mRM8l8vyw4MbPJ_BftkIQ-lQFCAugw5xKvc_cc5X9mvMhmqzaJKpkSwDCV9CbeEiL0zJFWPCk31NpOJG7pLWT2qAT14DaSypQs4__dVsqxmoU3Qf-RuFupeOCqPB2MA=s637-w478-h637-no" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
