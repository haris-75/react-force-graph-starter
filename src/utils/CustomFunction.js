export const ConvertToReactForceJSON = (inputJson) => {
  const nodes = inputJson.map((obj) => ({
    id: obj?.text.substring(0, 20),
    group: 1,
  }));
  nodes.push(
    { id: 'Email', group: 1, color: 'lawngreen' },
    { id: 'Phone', group: 1, color: 'goldenrod' },
    { id: 'SSN', group: 1, color: 'mediumslateblue' },
    { id: 'SSH-RSA', group: 1, color: 'coral' },
    { id: 'Regex', group: 1, color: 'aquamarine' }
  );
  const links = inputJson.map((obj) => ({
    target: obj?.text.substring(0, 20),
    source: obj?.regexName,
  }));
  links.push(
    { source: 'Email', target: 'Regex' },
    { source: 'Phone', target: 'Regex' },
    { source: 'SSN', target: 'Regex' },
    { source: 'SSH-RSA', target: 'Regex' }
  );
  return { nodes, links };
};
