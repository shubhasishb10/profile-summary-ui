import JobDetail from "./job-history/JobDetail";

export default function JobHistory() {
  return (
    <>
      <h1 className="w-[100%] h-[100%] text-4xl text-center justify-between p-24">
        Job history page
      </h1>
      <JobDetail />
    </>
  );
}
