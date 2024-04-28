import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const router = useRouter();

  const inputChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchAddressHandler = (e) => {
    if (e.key === 'Enter') {
      if (searchInput.length === 42) {
        router.push(`/address/${searchInput}`);
      } else if (searchInput.length === 66) {
        router.push(`/tx/${searchInput}`);
      } else {
        return alert('Enter correct address/hash');
      }
    }
  };

  const searchHandler = () => {
    if (searchInput.length === 42) {
      router.push(`/address/${searchInput}`);
    } else if (searchInput.length === 66) {
      router.push(`/tx/${searchInput}`);
    } else {
      return alert('Enter correct address/hash');
    }
  };

  return (
    <div className='bg-[#161616] flex p-4 w-[90%] mx-auto rounded-sm mt-12'>
      <input
        onChange={inputChangeHandler}
        onKeyDown={searchAddressHandler}
        value={searchInput}
        placeholder='Search by transaction hash or address / eg. 0xD1A36C9a...'
        className='bg-inherit w-full outline-none focus:outline-none text-white placeholder:text-[#737373] text-sm py-2 font-light'
      />

      <BsSearch
        onClick={searchHandler}
        className='bg-white p-2 text-black text-4xl rounded-sm cursor-pointer hover:bg-[#f0f0f0]'
      />
    </div>
  );
};

export default SearchBar;
