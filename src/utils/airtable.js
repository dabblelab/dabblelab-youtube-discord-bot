const Airtable = require('airtable');
const axios = require('axios')
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appooRYIK3yOMEdEn');


// constants
const MAX_RECORDS = 3;
const COURSE_API = `https://api.airtable.com/v0/appooRYIK3yOMEdEn/courses`

const fetchCourses = async function () {
  const requestConfig = {
    method: "get",
    url: COURSE_API,
    params: {
      maxRecords: MAX_RECORDS,
      view: 'Grid view'
    },
    headers: { 'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}` },
  };

  try {
    const res = await axios(requestConfig);
    return res.status === 200 ? res.data.records : [];
  } catch (e) {
    console.log(e);
    return [];
  }

}

module.exports = {
  fetchCourses,
}
