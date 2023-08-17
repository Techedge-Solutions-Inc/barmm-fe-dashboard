import _ from 'lodash';
import { string } from 'yup';
import { useMediaQuery } from 'usehooks-ts';
import React, { useState, useEffect } from 'react';
// import { BACKEND_API_URL } from '@/constants';


const BACKEND_API_URL = ""
// const [getTokenStoredData, setGetTokenStoredData] = useState({})

// useEffect(() => {
//   if (document.location.hostname != BACKEND_API_URL) {
//     window.localStorage.setItem('token', token);
//   }
// }, [getTokenStoredData])

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export const getFirstLetters = (text: string) => {
  return text
    .split(' ')
    .map((word) => word[0])
    .join('');
};

export const toSnakeCase = (text: string): string => {
  return text.toLowerCase().replace(' ', '_');
};

export const toKebabCase = (text: string): string => {
  return text.toLowerCase().replace(' ', '-');
};

export const getDomainHost = (): string => {
  return document.location.hostname;
};

// auth function for local only to store data and set to localstorage
export const checkIfLocal = (token: any) => {
  if (document.location.hostname != BACKEND_API_URL) {
    window.localStorage.setItem('token', token);
  }
};

// auth function for local only to store data and set to localstorage
// Only Calls in APIS

export const checkIfLocalInAPI = (): any => {
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const token = window.localStorage.getItem('token');
    if (document.location.hostname != BACKEND_API_URL) {
      const auth = {
        auth: {
          username: token,
          password: '',
        },
      };
      return auth;
    }
  }
};

/**
 * Export csv
 */
export const downloadFile = ({
  data,
  fileName,
  fileType,
}: {
  data: string;
  fileName: string;
  fileType: string;
}): void => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType });

  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement('a');
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);

  const clickEvt = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });

  a.dispatchEvent(clickEvt);
  a.remove();
};

export const exportToCsv = (
  headers:
    | {
        label: string;
        key: string;
        formatter?: (data: any, item: object) => string;
      }[]
    | string[],

  data: object[],
  fileName: string
): void => {
  const escapeString = (text: string): string => {
    if (typeof text == 'undefined') {
      return '';
    }

    if (!text.includes(',')) {
      return text;
    }

    return '"' + text + '"';
  };

  // Headers for each column
  let csvHeaders = [
    headers.map((h) => (typeof h == 'string' ? h : h.label)).join(','),
  ];

  // Convert data to a csv
  let csvBody = data.reduce((csvContent: string[], row: any) => {
    let rowArray = headers.map((h) => {
      if (typeof h == 'string') {
        return escapeString(row[h]);

        // with formatter
      } else if (typeof h.formatter != 'undefined') {
        return escapeString(h.formatter(row[h.key], row));

        // without formatter
      } else {
        return escapeString(row[h.key]);
      }
    });

    csvContent.push(rowArray.join(','));

    return csvContent;
  }, []);

  downloadFile({
    data: [...csvHeaders, ...csvBody].join('\n'),
    fileName: fileName,
    fileType: 'text/csv',
  });
};

// LOGOUT in LOCAL
export const localLogout = (): any => {
  if (window !== undefined) {
    // Clear viewed job applications profile
    window.localStorage.removeItem('viewedJobApplications');
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('account_type');
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('selectedJobTitle');
    window.localStorage.removeItem('drawer');
  }
};

/**
 * To Salary String
 */
export const toSalaryString = ({
  salaryRange,
  salaryPeriod,
}: {
  salaryRange?: { min?: number; max?: number };
  salaryPeriod: string | string[];
}): string => {
  if (typeof salaryRange == 'undefined') {
    return 'N/A';
  }

  let salaryPeriodString = '';

  if (typeof salaryPeriod == 'string') {
    salaryPeriodString = `/${_.toLower(salaryPeriod.split(' ')[1] ?? '')}`;
  } else {
    salaryPeriodString = salaryPeriod
      .map((sp) => `/${_.toLower(sp.split(' ')[1] ?? '')}`)
      .join('');
  }

  if (
    salaryRange.min == undefined ||
    salaryRange.max == undefined ||
    salaryPeriodString == '/'
  ) {
    return 'N/A';
  }

  return `$${salaryRange.min}-${salaryRange.max}${salaryPeriodString}`;
};

/**
 * Get current user
 */
export const getCurrentUser = () => {
  if (typeof document !== 'undefined') {
    const user = JSON.parse(String(window.localStorage.getItem('user')));
    return user?.currentUser;
  }

  return {};
};

/**
 * Get current user
 */
export const getCurrentUserPermission = () => {
  if (typeof document !== 'undefined') {
    const user = JSON.parse(String(window.localStorage.getItem('user')));
    return _.get(user, 'currentUser.userRole.permissions', {
      caseTypeManagement: { read: true, write: true },
      spotReportManagement: { read: true, write: true },
      incidentReportManagement: { read: true, write: true },
      barangayManagement: { read: true, write: true },
      accountManagement: { read: true, write: true },
    });
  }
  return {};
};

/**
 * Get Profile Percentage
 */
export const getProfilePercentage = () => {
  if (typeof document !== 'undefined') {
    const user = JSON.parse(String(window.localStorage.getItem('user')));
    return user?.profilePercentage;
  } else {
    return 0;
  }
};

export const getCurrentUserId = () => {
  const currentUser = getCurrentUser();

  if (currentUser) {
    return currentUser._id;
  }

  return null;
};

// Get Token
export const getToken = () => {
  if (typeof document !== 'undefined') {
    if (document.location.hostname != BACKEND_API_URL) {
      return String(window.localStorage.getItem('token'));
    }
  }

  return '';
};

// GLOBAL FUNCTION
export const grep = (items: string | any[], callback: (arg0: any) => any) => {
  // grep
  // https://gabrieleromanato.name/javascript-implementing-the-grep-function#:~:text=The%20grep()%20utility%20is,that%20satisfy%20a%20certain%20condition.
  var filtered = [],
    len = items.length,
    i = 0;
  for (i; i < len; i++) {
    var item = items[i];
    var cond = callback(item);
    if (cond) {
      filtered.push(item);
    }
  }
  return filtered;
};

export const capitalizeWords = (arr: string[] | never[]) => {
  if (arr) {
    return _.map(arr, (word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const rest = word.slice(1).toLowerCase();

      return firstLetter + rest;
    });
  } else {
    return [];
  }
};

export const isMacOrIPhone = () => {
  const isMac =
    typeof window !== 'undefined'
      ? (
          _.get(navigator, 'userAgent.platform') ||
          _.get(navigator, 'platform') ||
          'unknown'
        )
          .toUpperCase()
          .indexOf('MAC') >= 0
      : false;

  const isIPhone =
    typeof window !== 'undefined'
      ? (
          _.get(navigator, 'userAgent.platform') ||
          _.get(navigator, 'platform') ||
          'unknown'
        )
          .toUpperCase()
          .indexOf('IPHONE') >= 0
      : false;

  return isMac || isIPhone;
};

export const useDate = () => {
  const locale = 'ph';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: 'long',
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
  });

  return {
    date,
    time,
    wish,
  };
};
