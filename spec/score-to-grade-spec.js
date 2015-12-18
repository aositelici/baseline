describe('score-to-grade-spec', function() {

  it('when score > 100,it should return out of range', function() {
    var result = scoreToGrade(101);
    expect(result).toBe('out of range');
  });

  it('when score is between 90 and 100,grade should be s', function() {
    var result = scoreToGrade(93);
    expect(result).toBe('s');
  });

  it('when score is between 80 and 90,grade should be a', function() {
    var result = scoreToGrade(85);
    expect(result).toBe('a');
  });

  it('when score is between 70 and 80,grade should be b', function() {
    var result = scoreToGrade(78);
    expect(result).toBe('b');
  });

  it('when score is between 60 and 70,grade should be c', function() {
    var result = scoreToGrade(61);
    expect(result).toBe('c');
  });

  it('when score < 60,grade should be d', function() {
    var result = scoreToGrade(42);
    expect(result).toBe('d');
  });

  it('when score < 0,it should return out of range', function() {
    var result = scoreToGrade(-6);
    expect(result).toBe('out of range');
  });

  it('when score is null,it should return invalid input', function() {
    var foo = function() {
      scoreToGrade("");
    };
    expect(foo).toThrowError(TypeError,"invalid input");
  });

  it('when score is a string,it should return invalid input', function() {
    var foo = function() {
      scoreToGrade("ad");
    };
    expect(foo).toThrowError(TypeError,"invalid input");
  });
});
