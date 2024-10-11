import JobDetail from "./job-history/JobDetail";

export default function JobHistory() {
  return (
    <>
      <h1 className="w-[100%] text-2xl text-center justify-between p-24 h-vh">
        Job history page
      </h1>
      <JobDetail />
    </>
  );
}
