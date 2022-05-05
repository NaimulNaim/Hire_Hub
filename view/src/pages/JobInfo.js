import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import { Button, Tag } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import { applyJob } from "../redux/actions/jobAction";

function JobInfo({ match }) {
  const { jobs } = useSelector((state) => state.jobsReducer);

  const job = jobs.find((job) => job._id == match.params.id);

  const userid = JSON.parse(localStorage.getItem("user"))._id;

  const appliedCandidates = job.appliedCandidates;

  const alreadyApplied = appliedCandidates.find(
    (candidate) => candidate.userid == userid
  );

  const dispatch = useDispatch();

  function applyNow() {
    dispatch(applyJob(job));
  }

  return (
    <div>
      <DefaultLayout>
        {job && (
          <div>
            <p>
              <b>Title: </b>
              {job.title}
            </p>
            <p>
              <b>Company</b>: {job.company}
            </p>
            <p>
              <b>Small Description</b>: {job.smallDescription}
            </p>
            <p>Full Description: {job.fullDescription}</p>
            <p>Title: {job.title}</p>
            <p>
              <b>Skills Required</b>: {job.skillsRequired}
            </p>
            <p>
              <b>Experience</b> : {job.experience}
            </p>
            <p>
              <b>Minimum Qualification</b>: {job.minimumQualification}
            </p>
            <hr />
            <p>
              <b>Salary Range</b>: {job.salaryFrom}-{job.salaryTo}
            </p>
            <p>Department: {job.department}</p>
            <p>Company Profile: {job.companyDescription}</p>
            <p>Total candidates applied: {job.appliedCandidates.length}</p>
            <hr />

            <div className="flex justify-content-between">
              {job.postedBy == userid ? (
                <Button>
                  <Link to={`/editjob/${job._id}`}>Edit Now</Link>
                </Button>
              ) : alreadyApplied ? (
                <Tag color ="green">Already Applied</Tag>
              ) : (
                <Button onClick={applyNow}>Apply Now</Button>
              )}
              <p>
                <b>Posted on : </b>
                {moment(job.createAt).format("MMM DD yy")}
              </p>
            </div>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default JobInfo;
