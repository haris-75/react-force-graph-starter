import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import SampleData from '../Data/SampleData.json';
import ForceGraph2D from 'react-force-graph-2d';
import ForceGraph3D from 'react-force-graph-3d';
import { ConvertToReactForceJSON } from '../utils/CustomFunction';

const Main = () => {
  const [showGraph, setShowGraph] = useState(0);
  const [data, setData] = useState(ConvertToReactForceJSON(SampleData));
  const regexArray = ['Email', 'Phone', 'SSN', 'SSH-RSA', 'Regex'];

  return (
    <Container>
      <div>
        <center>
          <h1>Hey there!</h1>
          <h2>Which type of graph you want to see?</h2>
          <div style={{ paddingBottom: '1rem' }}>
            <center>
              <Button
                variant='secondary'
                style={{ marginRight: '1rem' }}
                onClick={() => setShowGraph(2)}
                disabled={showGraph === 2}
              >
                2D graph
              </Button>
              <Button
                variant='secondary'
                style={{ marginLeft: '1rem' }}
                onClick={() => setShowGraph(3)}
                disabled={showGraph === 3}
              >
                3D graph
              </Button>
            </center>
          </div>
        </center>
      </div>

      {showGraph === 2 ? (
        <ForceGraph2D
          width={1000}
          height={500}
          backgroundColor={'#f7f7f7'}
          graphData={data}
          nodeLabel={(node) => `${node.id}`}
          linkLabel={(link) => `${link.source.id}: ${link.target.id}`}
          nodeVal={(node) =>
            node.id === 'Regex' ? 8 : regexArray.includes(node.id) ? 3 : 1
          }
        />
      ) : (
        ''
      )}
      {showGraph === 3 ? (
        <ForceGraph3D
          width={1000}
          height={500}
          graphData={data}
          nodeLabel={(node) => `${node.id}`}
          linkLabel={(link) => `${link.source.id}: ${link.target.id}`}
          nodeVal={(node) =>
            node.id === 'Regex' ? 8 : regexArray.includes(node.id) ? 3 : 1
          }
        />
      ) : (
        ''
      )}
    </Container>
  );
};

export default Main;
