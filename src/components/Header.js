import React from "react";
import Search from "./Search";
import Filter from "./Filter";

function Header({ search, onSearch, submittedSearch, onSubmit, sort, onSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} onSearch={onSearch} submittedSearch={submittedSearch} onSubmit={onSubmit}/>
      <Filter sort={sort} onSort={onSort}/>
    </header>
  );
}

export default Header;
