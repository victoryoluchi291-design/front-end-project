import React from "react";
import { Search, ClipboardCheck } from "lucide-react";
import "./TaskPage.css";

const Tasks = () => {

  return (

    <main className="tasks-page">

      <section className="tasks-container">

        {/* Page Heading */}

        <div className="tasks-heading">

          <h1>Tasks</h1>

          <p>

            Complete real tasks from brands — try an app,

            post about it — and get paid per task

          </p>

        </div>

        {/* Search Bar */}

        <div className="tasks-search">

          <Search size={23} className="tasks-search-icon" />

          <input

            type="text"

            placeholder="Search tasks..."

            aria-label="Search tasks"

          />

        </div>

        {/* Empty State */}

        <div className="tasks-empty-card">

          <ClipboardCheck

            size={58}

            strokeWidth={1.8}

            className="tasks-empty-icon"

          />

          <h2>No tasks available right now</h2>

          <p>

            New tasks appear as brands post them.

            <br />

            Check back soon.

          </p>

        </div>

      </section>

    </main>

  );

};

export default Tasks;