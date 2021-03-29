#include <iostream>
#include <string>
#include <sstream>

using namespace std;

// example aaallllfffddd => 3a4l3f3d

string compress_string(string &a, string &b);

int main()
{
    string a, out;
    cout << "Enter string to compress: \n";
    getline(cin, a);
    out = compress_string(a, out);
    if (a.compare(out))
    {
        cout << a << " can be compressed to " << out << endl;
    }
    else
    {
        cout << a << " can not be compressed\n";
    }
    cout << "Compressed string: " << out << endl;
    return 0;
}

string compress_string(string &a, string &out)
{
    int str_length = a.length();
    size_t counterB, counterA = 1;
    int instances = 1;

    char prev, current;

    while (counterA < str_length)
    {
        current = a[counterA];
        if (prev == current)
        {
            ++instances;
        }
        else
        {
            out += a[counterA - 1];
            out += to_string(instances);
            instances = 1;
        }
        if (out.length() >= str_length)
        {
            return a;
        }

        prev = a[counterA];
        ++counterA;
    }
    out += to_string(instances);
    out += a[str_length - 1];
    if (out.length() >= str_length)
    {
        return a;
    }

    return out;
};
