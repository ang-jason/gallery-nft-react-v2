import { useJobs, CareerItem } from "domains/career";
import { LoginForm, useAuth, LogoutButton } from "domains/auth";
import * as React from "react";

const createJobApplication = (jobId, token) =>
  fetch("https://ecomm-service.herokuapp.com/job-application", {
    method: "POST",
    body: JSON.stringify({
      linkedinUrl: "https://www.linkedin.com/in/leehsienloong/",
      jobId,
    }),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  });

export const ApplyJob = () => {
  const { page, setPage, jobs } = useJobs();
  const auth = useAuth();

  return (
    <div>
      {auth.status === "anonymous" && (
        <LoginForm
          onSuccess={(accessToken) => {
            auth.login(accessToken);
          }}
        />
      )}
      <div className="p-3 text-center">
        <LogoutButton />
      </div>
      <div className="flex justify-between max-w-xl mx-auto">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button type="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
      <div className="max-w-xl mx-auto p-6 space-y-5">
        {jobs &&
          jobs.map((job) => (
            <CareerItem
              title={job.title}
              department={job.department}
              level={job.level}
              onApply={
                auth.status === "authenticated"
                  ? () => createJobApplication(job._id, auth.accessToken)
                  : undefined
              }
              key={job._id}
            />
          ))}
      </div>
    </div>
  );
};
