import ActiveLink from "./components/ActiveLink";

function Test() {
  return (
    <div>
      <nav>
        <ul>
          <ActiveLink href="/test">
            <a>to test</a>
          </ActiveLink>
          <ActiveLink href="/another">
            <a>to another</a>
          </ActiveLink>
        </ul>
      </nav>
    </div>
  );
}

export default Test;
