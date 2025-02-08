string_to_dump = "DBHYM0HZ2T00+Z2SR0UB2NGBVMGPQNM/JVRC-QPJTKTQ7KQ7UD0O3LITD4C1N52-QPJTKTQ7ZT7M4VG50 OQ40H$SF *J8%4SZ9D$2LF7O*CSHPDUTWNPWELTHNU21/VIG6W0 GVLNP 05+D38RNYJZVJ.AJFZJ995.8LXTMGOFLOKF$070"
file_name = "qsl.sig"
 
BASE45_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"
BASE45_DICT = {v: i for i, v in enumerate(BASE45_CHARSET)}

def b45decode(encoded) -> bytes:
    try:
        if isinstance(encoded, str):
            buf = [BASE45_DICT[c] for c in encoded.rstrip("\n")]
        elif isinstance(encoded, bytes):
            buf = [BASE45_DICT[c] for c in encoded.decode()]
        else:
            raise TypeError("Type must be 'str' or 'bytes'")

        buflen = len(buf)
        if buflen % 3 == 1:
            raise ValueError("Invalid base45 string")

        res = []
        for i in range(0, buflen, 3):
            if buflen - i >= 3:
                x = buf[i] + buf[i + 1] * 45 + buf[i + 2] * 45 * 45
                if x > 0xFFFF:
                    raise ValueError
                res.extend(divmod(x, 256))
            else:
                x = buf[i] + buf[i + 1] * 45
                if x > 0xFF:
                    raise ValueError
                res.append(x)
        return bytes(res)
    except (ValueError, KeyError, AttributeError) as exc:
        raise ValueError("Invalid base45 string") from exc

if __name__ == '__main__':
    sig = b45decode(string_to_dump)
    with open(file_name, "wb") as file:
        file.write(sig)