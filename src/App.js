import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
        <header className="App-header"><b>Ticketbrite</b></header>
        <div className="App-body">
            <div className="section-main">
                <div className="section-header">
                    <div>Popular events near Buenos Aires</div>
                    <div className="section-buttons">
                        <div className="event__tickets">Dates <span>▾</span></div>
                        <div className="event__tickets">Categories <span>▾</span></div>
                        <div className="event__tickets">Sort by <span>▾</span></div>
                    </div>
                </div>
                <Event
                    image="https://m.media-amazon.com/images/I/610HGoUTHGL._AA256_.jpg"
                    date={{
                        month: "OCT",
                        day: "11",
                    }}
                    name="Iron Maiden in concert"
                    location={{
                        venue: "Vélez",
                        address: "Juan B. Justo 121",
                    }}
                    tickets="tickets button"
                    cls="event-131313"
                    id='131313'
                />
                <Event
                    image="data:image/jpeg;base64,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"
                    date={{
                        month: "OCT",
                        day: "19",
                    }}
                    name="Tarja Turunen"
                    location={{
                        venue: "Teatro Flores",
                        address: "Pergamino 1112",
                    }}
                    tickets="tickets button"
                    cls="event-121212"
                    id='121212'
                />

                <Event
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLd5IIc8mcPK6fK_v3DB1OMUDzjrMa_C1QeYSp9guuzl4k1PB2tw"
                    date={{
                        month: "OCT",
                        day: "29",
                    }}
                    name="Epica"
                    location={{
                        venue: "Teatro Flores",
                        address: "Pergamino 1112",
                    }}
                    tickets="tickets button"
                    cls="event-111111"
                    id='111111'
                />
                <Event
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTedsv7HTgbZB8M8qH6daiazHg0T923RtvIUABV6-TQa0Sub1REnA"
                    date={{
                        month: "NOV",
                        day: "03",
                    }}
                    name="Stratovarius"
                    location={{
                        venue: "Luna Park",
                        address: "Corrientes 234",
                    }}
                    tickets="tickets button"
                    cls="event-101010"
                    id='101010'
                />
                <Event
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSIjlFv_GQ2rgZZbxUY5oIXwMjht-pIcHq7H7LvzVou_hW9-r"
                    date={{
                        month: "NOV",
                        day: "20",
                    }}
                    name="Nightwish"
                    location={{
                        venue: "Vélez",
                        address: "Juan B. Justo 121",
                    }}
                    tickets="tickets button"
                    cls="event-999"
                    id='999'
                />
            </div>
        </div>
      </div>
  );
}

class Event extends React.Component {
    render() {
        const {
            image,
            date,
            name,
            location,
            cls,
        } = this.props;

        return (
            <div className={"event-with-notification " + cls}>
                <div className="event">
                    <img className="event__image" src={image}></img>
                    <div className="event__date">
                        <div className="date__month">{date.month}</div>
                        <div className="date__day">{date.day}</div>
                    </div>
                    <div className="event__name">{name}</div>
                    <div className="event_left-elements">
                        <div className="event__location">
                            <div className="location__venue">{location.venue}</div>
                            <div className="location__address">{location.address}</div>
                        </div>
                        <div className="event__tickets">Get tickets</div>
                    </div>
                </div>
                <div className="notification">
                    ⏰This event is selling fast! Hurry up!!
                </div>
                <hr className="event__hr"></hr>
            </div>
        );
    }
}

export default App;
