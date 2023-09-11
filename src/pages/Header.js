import { HeaderOption } from '../components/header';
import { headerOptions } from '../data/header';

export const Header = () => {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav className="nav-menu">
        <ul>
          {headerOptions.map((headerOption) => (
            <HeaderOption
              key={`header_option_${headerOption.id}`}
              {...headerOption}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};
