const Airtable = require('airtable');
const axios = require('axios')
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appooRYIK3yOMEdEn');


// constants
const COURSE_API = `https://api.airtable.com/v0/appooRYIK3yOMEdEn/courses`
const LESSONS_API = `https://api.airtable.com/v0/appooRYIK3yOMEdEn/lessons`

const fetchCourses = async function () {
  const requestConfig = {
    method: "get",
    url: COURSE_API,
    params: {
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

const getAllLessonsOfaCourse = async function (allLessons, courseNumber) {
  try {
    const lessons = allLessons.filter(lesson => lesson.fields.id.split("-")[0] === courseNumber)
    return lessons;
  } catch (e) {
    console.log(e)
    return [];
  }
}

const fetchLessons = async function (courseNumber) {
  const requestConfig = {
    method: "get",
    url: LESSONS_API,
    params: {
      view: 'Grid view'
    },
    headers: { 'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}` },
  };

  try {
    const res = await axios(requestConfig);
    return res.status === 200 ? getAllLessonsOfaCourse(res.data.records, courseNumber) : [];
  } catch (e) {
    console.log(e);
    return [];
  }

}

module.exports = {
  fetchCourses,
  fetchLessons
}
