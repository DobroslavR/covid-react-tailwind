import { useEffect, useState } from 'react';
import Card from './components/Card'
import axios from 'axios'

const normalizeCovidData = (covidDataFromAPI) => {
  const covid = []
  for (const key in covidDataFromAPI) {
    if (Object.hasOwnProperty.call(covidDataFromAPI, key)) {
      const item = { date: key, ...covidDataFromAPI[key] };
      covid.push(item)
    }
  }
  return covid
}

function App() {
  const [covidDataByCountry, setCovidDataByCountry] = useState(null)

  useEffect(() => {
    const fetchCovidData = async () => {
      const { data } = await axios.get('https://covidapi.info/api/v1/country/CZE')
      const covid = normalizeCovidData(data.result)
      setCovidDataByCountry(covid)
    }
    fetchCovidData()
  }, [])

  const covidList = covidDataByCountry ? covidDataByCountry.map(({ date, confirmed, deaths, recovered }) => <Card key={date} confirmed={confirmed} date={date} deaths={deaths} recovered={recovered}></Card>) : 'Loading...'

  return (
    <div className="p-4">
      <h1 className="mb-4 text-3xl text-center">Covid data for Czech Republic</h1>
      <div className="grid grid-cols-3 gap-3">
        {covidList}
      </div>
    </div>
  );
}

export default App;
