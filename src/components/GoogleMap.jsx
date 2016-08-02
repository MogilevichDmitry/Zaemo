import React, { Component } from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

export default class SimpleMap extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      markers: [{
        position: {
          lat: 53.679293,
          lng: 23.828219,
        },
        key: `Grodno`,
        defaultAnimation: 2,
      },
      {
        position: {
          lat: 54.679293,
          lng: 22.828219,
        },
        key: `Lithuania`,
        defaultAnimation: 2,
      }],
    }
  }

  render() {
    return (
      <section style={{height: "100%"}}>
        <GoogleMapLoader
          containerElement={
           <div
            {...this.props}
            style={{
              height: `100%`,
            }}
          ></div>
        }
          googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{ lat: 53.679293, lng: 23.828219 }}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker {...marker} />
              );
            })}
          </GoogleMap>
        }
        />
      </section>
    );
  }
}